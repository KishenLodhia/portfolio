// Importing necessary types from React
import React from "react";

// Defining the props for the LargeBadge component
interface LargeBadgeProps {
  title: string; // The title of the badge
  icon: React.ReactNode; // The icon of the badge
}

// LargeBadge component
const LargeBadge = ({ title, icon }: LargeBadgeProps) => {
  return (
    // The main div that wraps everything
    <div className="flex flex-row gap-2 items-center w-fit p-2  text-muted-foreground text-sm">
      {/* The div that displays the icon */}
      <div>{icon}</div>
      {/* The div that displays the title */}
      <div>{title}</div>
    </div>
  );
};

// Exporting the LargeBadge component
export default LargeBadge;
