"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div className="Thanks-Container">
      <h1 className="Thanks-Message">投稿ありがとうございます。</h1>
      <Link href="/">フォームに戻る</Link>
    </div>
  );
}
