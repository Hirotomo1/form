import "../app/styles.css";
import { Page } from "./form/page";

export default function RootLayout() {
  return (
    <html lang="ja">
      <body>
        <main>
          <Page />
        </main>
      </body>
    </html>
  );
}
