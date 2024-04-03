interface LargeBadgeProps {
  title: string;
}

import React from "react";

interface LargeBadgeProps {
  title: string;
  icon: React.ReactNode;
}

const LargeBadge = ({ title, icon }: LargeBadgeProps) => {
  return (
    <div className="flex flex-row gap-2 items-center w-fit p-2 rounded-3xl bg-popover text-muted-foreground shadow-sm text-sm">
      <div>{icon}</div>
      <div>{title}</div>
    </div>
  );
};

export default LargeBadge;
