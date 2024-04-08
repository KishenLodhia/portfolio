import { useState, useEffect } from "react";
import { Skeleton } from "./ui/skeleton";

type Quote = {
  quote: string;
  author: string;
};

function Quote() {
  const [quotes, setQuotes] = useState<Quote[] | null>(null);

  useEffect(() => {
    if (!quotes) {
      fetchQuote();
    }
  }, []);

  const fetchQuote = async () => {
    try {
      const response: Response = await fetch("https://api.api-ninjas.com/v1/quotes?category=inspirational", {
        headers: {
          "x-api-key": import.meta.env.VITE_API_NINJAS_API_KEY,
        },
      });
      if (response.status == 200) {
        const data = await response.json();
        console.log(data);
        setQuotes(data);
      } else {
        throw new Error("Error occurred");
      }
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  return (
    <div className="flex flex-col p-4">
      {quotes ? (
        quotes.map((quote) => (
          <div key={quote.quote} className="pl-10 border-l-4 border-lime-500 w-fit">
            <p className="font-thin text-2xl">{quote.quote}</p>
            <p className="flex flex-auto items-end justify-end">- {quote.author}</p>
          </div>
        ))
      ) : (
        <div className="flex flex-col w-full p-4">
          <Skeleton className="rounded-full w-[80%] h-5 m-2" />
          <Skeleton className="rounded-full w-[20%] h-5 m-2" />
        </div>
      )}
    </div>
  );
}

export default Quote;
