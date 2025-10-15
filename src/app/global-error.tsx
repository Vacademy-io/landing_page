"use client";

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen items-center justify-center p-6 text-center">
          <div>
            <h2 className="text-2xl font-semibold">Application error</h2>
            <p className="mt-2 text-muted-foreground">Please refresh the page.</p>
            {process.env.NODE_ENV !== "production" && error?.digest && (
              <p className="mt-2 text-xs text-muted-foreground">{error.digest}</p>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}


