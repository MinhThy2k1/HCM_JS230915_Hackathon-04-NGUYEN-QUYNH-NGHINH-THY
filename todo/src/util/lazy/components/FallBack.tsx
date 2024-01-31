export default function FallBack({ fallback }: { fallback: string | null }) {
  window.location.href = fallback ? fallback : "/"
  return (
    <div>

    </div>
  )
}
