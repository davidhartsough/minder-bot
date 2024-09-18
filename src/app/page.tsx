import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header>
        <h1>minder bot</h1>
      </header>
      <section>
        <Link href="/new">Create New List</Link>
      </section>
    </main>
  );
}
