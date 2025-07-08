import { FileText } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function SqlPage() {
  return (
    <div className="flex min-h-[calc(100vh-183px)] items-center justify-center">
      <Alert className="max-w-md">
        <FileText className="h-4 w-4" />
        <AlertTitle>No SQL Snippet Selected</AlertTitle>
        <AlertDescription>
          Please select a SQL from the sidebar to view its contents or create a
          new SQL.
        </AlertDescription>
      </Alert>
    </div>
  );
}
