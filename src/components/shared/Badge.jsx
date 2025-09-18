const colorMap = {
  gray: 'bg-gray-100 text-gray-800',
  blue: 'bg-blue-100 text-blue-800',
  green: 'bg-green-100 text-green-800',
  yellow: 'bg-yellow-100 text-yellow-800',
  red: 'bg-red-100 text-red-800'
}

export default function Badge({ children, color = 'gray' }) {
  return (
    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${colorMap[color]}`}>{children}</span>
  )
}


