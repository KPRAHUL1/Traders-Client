import Card from '../../../components/shared/Card.jsx'
import SectionHeader from '../../../components/shared/SectionHeader.jsx'

const kpis = [
  { key: 'orders', label: 'Open Orders', value: 7, delta: '+2 this week' },
  { key: 'revenue', label: 'Monthly Revenue', value: '₹4,75,000', delta: '+12%' },
  { key: 'collections', label: 'Collections Due', value: '₹1,10,000', delta: '3 invoices' },
  { key: 'chambers', label: 'Active Chambers', value: 5, delta: '2 preferred' }
]

export default function AgentDashboard() {
  return (
    <div className="p-6 space-y-6">
      <SectionHeader title="Agent Dashboard" subtitle="Your recent activity and KPIs" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <Card key={kpi.key}>
            <div className="text-sm text-gray-500">{kpi.label}</div>
            <div className="mt-1 text-2xl font-semibold text-gray-900">{kpi.value}</div>
            <div className="mt-1 text-xs text-green-600">{kpi.delta}</div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Recent Orders">
          <ul className="divide-y divide-gray-100">
            {[
              { id: 'ORD-004', item: 'Cement (50 bags)', status: 'confirmed' },
              { id: 'ORD-005', item: 'TMT Steel (3 tons)', status: 'pending' },
              { id: 'ORD-006', item: 'River Sand (5 tons)', status: 'shipped' }
            ].map((o) => (
              <li key={o.id} className="py-2 flex justify-between text-sm">
                <span className="text-gray-700">{o.id} • {o.item}</span>
                <span className="text-gray-500 capitalize">{o.status}</span>
              </li>
            ))}
          </ul>
        </Card>
        <Card title="Top Chambers">
          <ul className="divide-y divide-gray-100">
            {[
              { name: 'Premium Brick Chamber', score: 92 },
              { name: 'Alpha Cement Distributors', score: 88 },
              { name: 'SteelCo Traders', score: 81 }
            ].map((c) => (
              <li key={c.name} className="py-2 flex justify-between text-sm">
                <span className="text-gray-700">{c.name}</span>
                <span className="text-gray-500">Score {c.score}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  )
}


