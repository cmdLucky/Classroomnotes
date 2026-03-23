"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Calendar,
  Users,
  DollarSign,
  TrendingUp,
  Activity,
  Plus,
  MapPin,
  BookOpen,
  ShoppingBag,
  ArrowUpRight,
} from "lucide-react"
import Link from "next/link"
import { getEvents } from "@/lib/events-data"

export default function AdminDashboard() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [stats, setStats] = useState({
    totalEvents: 0,
    totalRegistrations: 0,
    monthlyRevenue: "HK$0",
    growthRate: "0%",
  })

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth")
    if (auth !== "true") {
      router.push("/admin/login")
    } else {
      setIsAuthenticated(true)

      const events = getEvents()
      const totalRegistrations = events.reduce((sum, event) => sum + (event.registrations || 0), 0)
      const revenue = totalRegistrations * 160 // Average price

      setStats({
        totalEvents: events.length,
        totalRegistrations,
        monthlyRevenue: `HK$${revenue.toLocaleString()}`,
        growthRate: "+23%",
      })
    }
  }, [router])

  if (!isAuthenticated) {
    return null
  }

  const statCards = [
    {
      title: "總活動數",
      titleEn: "Total Events",
      value: stats.totalEvents.toString(),
      icon: Calendar,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      href: "/admin/events",
    },
    {
      title: "總報名人數",
      titleEn: "Total Registrations",
      value: stats.totalRegistrations.toString(),
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-50",
      href: "/admin/registrations",
    },
    {
      title: "本月收入",
      titleEn: "Monthly Revenue",
      value: stats.monthlyRevenue,
      icon: DollarSign,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      href: "/admin/reports",
    },
    {
      title: "增長率",
      titleEn: "Growth Rate",
      value: stats.growthRate,
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      href: "/admin/reports",
    },
  ]

  const quickActions = [
    {
      title: "新增活動",
      titleEn: "New Event",
      icon: Calendar,
      href: "/admin/events/new",
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      title: "新增地點",
      titleEn: "New Location",
      icon: MapPin,
      href: "/admin/locations/new",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      title: "新增故事",
      titleEn: "New Story",
      icon: BookOpen,
      href: "/admin/stories/new",
      color: "bg-orange-500 hover:bg-orange-600",
    },
    {
      title: "新增產品",
      titleEn: "New Product",
      icon: ShoppingBag,
      href: "/admin/products/new",
      color: "bg-purple-500 hover:bg-purple-600",
    },
  ]

  const recentActivities = [
    { time: "2小時前", action: "新報名", detail: "張先生報名了「吉澳寻宝活动」" },
    { time: "5小時前", action: "活動更新", detail: "更新了「客家美食论坛」的詳情" },
    { time: "昨天", action: "新報名", detail: "李女士報名了「客家美食论坛」" },
    { time: "2天前", action: "系統", detail: "系統自動備份完成" },
  ]

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <Link key={index} href={stat.href}>
            <Card className="p-6 border-2 border-border hover:border-primary/50 transition-all hover:shadow-lg cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-sm font-medium text-foreground">{stat.title}</p>
                <p className="text-xs text-muted-foreground">{stat.titleEn}</p>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <Card className="p-6 border-2 border-border lg:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <Plus className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold text-foreground">快速新增 Quick Actions</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {quickActions.map((action, index) => (
              <Link key={index} href={action.href}>
                <Button className={`w-full h-24 ${action.color} text-white flex-col gap-2`}>
                  <action.icon className="w-6 h-6" />
                  <div className="text-center">
                    <p className="font-semibold">{action.title}</p>
                    <p className="text-xs opacity-90">{action.titleEn}</p>
                  </div>
                </Button>
              </Link>
            ))}
          </div>
        </Card>

        {/* Recent Activities */}
        <Card className="p-6 border-2 border-border">
          <div className="flex items-center gap-2 mb-6">
            <Activity className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold text-foreground">最近動態</h2>
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex gap-3 pb-4 border-b border-border last:border-0 last:pb-0">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-primary">{activity.action}</span>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                  <p className="text-sm text-foreground truncate">{activity.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
