import { useCallback, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dialog } from "radix-ui";
import Reveal from "@/components/Reveal";
import type { Highlight } from "@/data/profile";
import { cn } from "@/lib/utils";

// Shared name that lets the browser morph a tile's photo into the lightbox photo.
const MEDIA = "highlight-media";

// Bento placement by position: a large lead tile, a tall portrait, then a row of three.
const placement = [
  "col-span-2 row-span-2",
  "row-span-2 md:col-start-3 md:row-start-1",
  "",
  "",
  "col-span-2 md:col-span-1",
];
// Tiles that are small on phones show only their title there.
const compact = [false, true, true, true, false];
// Keep faces and headlines in frame when a photo is cropped to its tile.
const focus = [
  "object-center",
  "object-top",
  "object-center",
  "object-center",
  "object-center",
];

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Runs a state change inside a view transition when the browser supports it.
const transition = (update: () => void) => {
  if (!document.startViewTransition || prefersReducedMotion()) {
    update();
    return null;
  }
  return document.startViewTransition(() => flushSync(update));
};

const HighlightsGallery = ({ items }: { items: Highlight[] }) => {
  const [index, setIndex] = useState<number | null>(null);
  const tiles = useRef<(HTMLImageElement | null)[]>([]);
  const open = index !== null;

  const show = (next: number) => {
    const tile = tiles.current[next];
    if (tile) tile.style.viewTransitionName = MEDIA;
    transition(() => {
      if (tile) tile.style.viewTransitionName = "";
      setIndex(next);
    });
  };

  const close = useCallback(() => {
    if (index === null) return;
    const tile = tiles.current[index];
    const done = transition(() => {
      setIndex(null);
      if (tile) tile.style.viewTransitionName = MEDIA;
    });
    const clear = () => tile && (tile.style.viewTransitionName = "");
    if (done) done.finished.finally(clear);
    else clear();
  }, [index]);

  const step = useCallback(
    (delta: number) => {
      if (index === null) return;
      transition(() => setIndex((index + delta + items.length) % items.length));
    },
    [index, items.length],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, step]);

  // Horizontal swipe on touch screens.
  const swipeStart = useRef<number | null>(null);
  const onPointerDown = (event: React.PointerEvent) => {
    if (event.pointerType !== "mouse") swipeStart.current = event.clientX;
  };
  const onPointerUp = (event: React.PointerEvent) => {
    if (swipeStart.current === null) return;
    const dx = event.clientX - swipeStart.current;
    swipeStart.current = null;
    if (Math.abs(dx) > 48) step(dx < 0 ? 1 : -1);
  };

  const current = index === null ? null : items[index];

  return (
    <>
      <div className="grid auto-rows-[9.5rem] grid-cols-2 gap-3 md:auto-rows-[13rem] md:grid-cols-3 md:gap-4">
        {items.map((item, i) => (
          <Reveal
            key={item.title}
            delay={i * 50}
            className={cn("min-h-0", placement[i])}
          >
            <Tile
              item={item}
              imageRef={(node) => {
                tiles.current[i] = node;
              }}
              focusClass={focus[i]}
              lead={i === 0}
              compact={compact[i]}
              onOpen={() => show(i)}
            />
          </Reveal>
        ))}
      </div>

      <Dialog.Root open={open} onOpenChange={(next) => !next && close()}>
        <Dialog.Portal>
          <Dialog.Overlay className="data-[state=open]:animate-in data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/90 backdrop-blur-md" />
          {current && index !== null && (
            <Dialog.Content
              aria-describedby="highlight-caption"
              className="fixed inset-0 z-50 flex flex-col text-white outline-none"
              onPointerDown={onPointerDown}
              onPointerUp={onPointerUp}
            >
              <div className="flex items-center justify-between px-4 pt-4 md:px-8 md:pt-6">
                <p className="font-mono text-xs text-white/60 tabular-nums">
                  {index + 1} / {items.length}
                </p>
                <Dialog.Close
                  aria-label="Close"
                  className="focus-visible:outline-brand grid h-10 w-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  <X className="h-4 w-4" />
                </Dialog.Close>
              </div>

              <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 md:px-20">
                <img
                  src={current.image}
                  alt={current.title}
                  style={{ viewTransitionName: MEDIA }}
                  className="max-h-full max-w-full rounded-xl object-contain shadow-2xl shadow-black/60"
                  draggable={false}
                />
                <NavButton side="left" onClick={() => step(-1)} />
                <NavButton side="right" onClick={() => step(1)} />
              </div>

              <div className="mx-auto w-full max-w-3xl px-4 pt-5 pb-4 md:pb-6">
                <Dialog.Title className="text-lg font-semibold tracking-tight">
                  {current.title}
                </Dialog.Title>
                <Dialog.Description
                  id="highlight-caption"
                  className="mt-1 text-sm text-pretty text-white/70"
                >
                  {current.caption}
                </Dialog.Description>

                <div
                  className="mt-5 flex justify-center gap-2"
                  role="group"
                  aria-label="Choose a highlight"
                >
                  {items.map((item, i) => (
                    <button
                      key={item.title}
                      type="button"
                      aria-label={item.title}
                      aria-current={i === index}
                      onClick={() =>
                        i !== index && transition(() => setIndex(i))
                      }
                      className={cn(
                        "h-11 w-14 overflow-hidden rounded-md opacity-45 ring-2 ring-transparent transition-[opacity,box-shadow] duration-300 hover:opacity-80 focus-visible:ring-white/70 focus-visible:outline-none md:h-12 md:w-16",
                        i === index && "ring-brand opacity-100",
                      )}
                    >
                      <img
                        src={item.thumb ?? item.image}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </Dialog.Content>
          )}
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

type TileProps = {
  item: Highlight;
  imageRef: (node: HTMLImageElement | null) => void;
  focusClass: string;
  lead: boolean;
  compact: boolean;
  onOpen: () => void;
};

const Tile = ({
  item,
  imageRef,
  focusClass,
  lead,
  compact,
  onOpen,
}: TileProps) => {
  // Animated images show a still in the grid and only load the full file once someone shows interest.
  const animated = Boolean(item.thumb);
  const [playing, setPlaying] = useState(false);
  const play = () => animated && setPlaying(true);

  return (
    <button
      type="button"
      onClick={onOpen}
      onPointerEnter={play}
      onFocus={play}
      aria-label={`${item.title}: ${item.caption} Open larger.`}
      className="group bg-muted focus-visible:outline-brand relative block h-full w-full cursor-zoom-in overflow-hidden rounded-2xl text-left focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      <img
        ref={imageRef}
        src={playing ? item.image : (item.thumb ?? item.image)}
        alt=""
        loading="lazy"
        className={cn(
          "h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]",
          focusClass,
        )}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-black/85 via-black/45 to-transparent px-3.5 pt-12 pb-3 text-white md:px-5 md:pb-4">
        <p
          className={cn(
            "leading-snug font-medium tracking-tight text-pretty",
            compact && "text-sm md:text-base",
            lead && "md:text-xl",
          )}
        >
          {item.title}
        </p>
        <p
          className={cn(
            "mt-0.5 text-sm text-white/75",
            lead ? "line-clamp-2 md:max-w-sm" : "line-clamp-1",
            compact && "hidden md:block",
          )}
        >
          {item.caption}
        </p>
      </div>
    </button>
  );
};

const NavButton = ({
  side,
  onClick,
}: {
  side: "left" | "right";
  onClick: () => void;
}) => {
  const Icon = side === "left" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={side === "left" ? "Previous highlight" : "Next highlight"}
      className={cn(
        "focus-visible:outline-brand absolute top-1/2 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 md:grid",
        side === "left" ? "left-5" : "right-5",
      )}
    >
      <Icon className="h-5 w-5" />
    </button>
  );
};

export default HighlightsGallery;
