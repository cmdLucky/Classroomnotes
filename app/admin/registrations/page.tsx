"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Users, Mail, Phone, Calendar, Download } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function RegistrationsAdminPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth")
    if (auth !== "true") {
      router.push("/admin/login")
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  if (!isAuthenticated) return null

  const registrations = [
    {
      id: "1",
      name: "張小明",
      email: "zhang@example.com",
      phone: "+852 9123 4567",
      event: "吉澳寻宝活动",
      date: "2024-03-20",
      status: "confirmed",
      participants: 2,
    },
    {
      id: "2",
      name: "李美華",
      email: "li@example.com",
      phone: "+852 9234 5678",
      event: "客家美食论坛",
      date: "2024-03-18",
      status: "confirmed",
      participants: 1,
    },
    {
      id: "3",
      name: "王大衛",
      email: "wang@example.com",
      phone: "+852 9345 6789",
      event: "吉澳寻宝活动",
      date: "2024-03-15",
      status: "pending",
      participants: 3,
    },
  ]

  const filteredRegistrations = registrations.filter(
    (reg) =>
      reg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reg.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reg.event.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">報名管理</h1>
          <p className="text-muted-foreground">Registrations Management</p>
        </div>
        <Button>
          <Download className="w-4 h-4 mr-2" />
          匯出數據
        </Button>
      </div>

      <Card className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="搜尋姓名、電郵或活動... Search registrations..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-sm text-foreground">姓名 Name</th>
                <th className="text-left py-3 px-4 font-semibold text-sm text-foreground">聯絡方式 Contact</th>
                <th className="text-left py-3 px-4 font-semibold text-sm text-foreground">活動 Event</th>
                <th className="text-left py-3 px-4 font-semibold text-sm text-foreground">日期 Date</th>
                <th className="text-left py-3 px-4 font-semibold text-sm text-foreground">人數</th>
                <th className="text-left py-3 px-4 font-semibold text-sm text-foreground">狀態</th>
                <th className="text-left py-3 px-4 font-semibold text-sm text-foreground">操作</th>
              </tr>
            </thead>
            <tbody>
              {filteredRegistrations.map((reg) => (
                <tr key={reg.id} className="border-b border-border hover:bg-accent/50 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="font-medium">{reg.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="w-3 h-3 text-muted-foreground" />
                        <span>{reg.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="w-3 h-3 text-muted-foreground" />
                        <span>{reg.phone}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">{reg.event}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      {reg.date}
                    </div>
                  </td>
                  <td className="py-4 px-4">{reg.participants}人</td>
                  <td className="py-4 px-4">
                    <Badge variant={reg.status === "confirmed" ? "default" : "secondary"}>
                      {reg.status === "confirmed" ? "已確認" : "待處理"}
                    </Badge>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        查看
                      </Button>
                      <Button size="sm" variant="outline">
                        編輯
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
