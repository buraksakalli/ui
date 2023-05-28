import { Terminal } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function AlertDemo() {
  return (
    <Alert>
      <div className="flex items-center gap-1">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
      </div>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  )
}
