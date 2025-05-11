
import { ArrowDown, ArrowUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface KpiCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  color: string;
  icon: React.ReactNode;
}

export function KpiCard({ title, value, change, trend, color, icon }: KpiCardProps) {
  return (
    <Card className="overflow-hidden border-t-4" style={{ borderTopColor: color }}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <div className="rounded-full p-1" style={{ backgroundColor: `${color}20` }}>
          <span style={{ color }}>{icon}</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="mt-1 flex items-center space-x-1">
          {trend === "up" ? (
            <ArrowUp className="h-4 w-4 text-emerald-500" />
          ) : trend === "down" ? (
            <ArrowDown className="h-4 w-4 text-rose-500" />
          ) : null}
          <p
            className={cn("text-xs", {
              "text-emerald-500": trend === "up",
              "text-rose-500": trend === "down",
              "text-muted-foreground": trend === "neutral",
            })}
          >
            {change}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
