import * as React from "react";

const startDate = new Date("2023-10-01");
export function useExperience() {
  const [experience, setExperience] = React.useState<number>(0);
  React.useEffect(() => {
    const now = new Date();
    const diff = now.getTime() - startDate.getTime();
    const years = diff / (1000 * 60 * 60 * 24 * 365);
    setExperience(years);
  }, []);
  const roundedExperience = Math.round(experience * 10) / 10;
  return roundedExperience;
}
