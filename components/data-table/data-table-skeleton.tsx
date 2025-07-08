import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

interface DataTableSkeletonProps extends React.ComponentProps<"div"> {
  columnCount: number;
  rowCount?: number;
  filterCount?: number;
  cellWidths?: string[];
  withViewOptions?: boolean;
  withPagination?: boolean;
  shrinkZero?: boolean;
}

export function DataTableSkeleton({
  columnCount,
  rowCount = 10,
  filterCount = 0,
  cellWidths = ["auto"],
  withViewOptions = true,
  withPagination = true,
  shrinkZero = false,
  className,
  ...props
}: DataTableSkeletonProps) {
  const cozyCellWidths = Array.from(
    { length: columnCount },
    (_, index) => cellWidths[index % cellWidths.length] ?? "auto",
  );

  return (
    <div
      className={cn("flex w-full flex-col gap-0 overflow-auto", className)}
      {...props}
    >
      <div className="flex w-full items-center justify-between gap-2 overflow-auto p-[11.5px]">
        <div className="flex flex-1 items-center gap-2">
          {filterCount > 0
            ? Array.from({ length: filterCount }).map((_, i) => (
                <Skeleton key={i} className="h-7 w-[4.5rem] border-dashed" />
              ))
            : null}
        </div>
        {withViewOptions ? (
          <Skeleton className="ml-auto hidden h-7 w-[4.5rem] lg:flex" />
        ) : null}
      </div>
      <div className="overflow-hidden border-y [&>div]:h-[calc(100vh-146px)]">
        <Table>
          <TableHeader className="sticky top-0 z-10">
            {Array.from({ length: 1 }).map((_, i) => (
              <TableRow key={i} className="hover:bg-muted bg-muted">
                {Array.from({ length: columnCount }).map((_, j) => (
                  <TableHead
                    key={j}
                    style={{
                      width: cozyCellWidths[j],
                      minWidth: shrinkZero ? cozyCellWidths[j] : "auto",
                    }}
                  >
                    <Skeleton className="h-6 w-full border" />
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {Array.from({ length: rowCount }).map((_, i) => (
              <TableRow key={i} className="hover:bg-transparent">
                {Array.from({ length: columnCount }).map((_, j) => (
                  <TableCell
                    key={j}
                    style={{
                      width: cozyCellWidths[j],
                      minWidth: shrinkZero ? cozyCellWidths[j] : "auto",
                    }}
                  >
                    <Skeleton className="h-6 w-full" />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {withPagination ? (
        <div className="flex w-full items-center justify-between gap-2 overflow-auto p-1">
          <Skeleton className="hidden h-7 w-40 shrink-0 md:block" />
          <div className="flex flex-1 items-center justify-end gap-2">
            <div className="flex items-center gap-2">
              <Skeleton className="h-7 w-[110px]" />
            </div>
            <div className="flex items-center gap-2">
              <Skeleton className="size-7" />
              <Skeleton className="size-7 w-[38px]" />
              <Skeleton className="size-7 w-[48px]" />
              <Skeleton className="size-7 w-[30px]" />
              <Skeleton className="size-7" />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
