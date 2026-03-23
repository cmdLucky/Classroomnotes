"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Calendar,
  MapPin,
  BookOpen,
  ShoppingBag,
  Users,
  UserCog,
  Settings,
  BarChart3,
  FileText,
} from "lucide-react"

const menuItems = [
  {
    title: "儀表板",
    titleEn: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "活動管理",
    titleEn: "Events",
    href: "/admin/events",
    icon: Calendar,
  },
  {
    title: "地點管理",
    titleEn: "Locations",
    href: "/admin/locations",
    icon: MapPin,
  },
  {
    title: "故事管理",
    titleEn: "Stories",
    href: "/admin/stories",
    icon: BookOpen,
  },
  {
    title: "產品管理",
    titleEn: "Products",
    href: "/admin/products",
    icon: ShoppingBag,
  },
  {
    title: "報名管理",
    titleEn: "Registrations",
    href: "/admin/registrations",
    icon: Users,
  },
  {
    title: "用戶管理",
    titleEn: "Users",
    href: "/admin/users",
    icon: UserCog,
  },
  {
    title: "數據報表",
    titleEn: "Reports",
    href: "/admin/reports",
    icon: BarChart3,
  },
  {
    title: "內容管理",
    titleEn: "Content",
    href: "/admin/content",
    icon: FileText,
  },
  {
    title: "系統設置",
    titleEn: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-card border-r border-border flex-shrink-0 h-screen sticky top-0 overflow-y-auto">
      <div className="p-6 border-b border-border">
        <Link href="/admin/dashboard" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">MG</span>
          </div>
          <div>
            <h2 className="font-bold text-foreground">Me-Go-Out</h2>
            <p className="text-xs text-muted-foreground">管理後台</p>
          </div>
        </Link>
      </div>

      <nav className="p-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname.startsWith(item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground font-medium"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground",
              )}
            >
              <item.icon className="w-5 h-5" />
              <div className="flex-1">
                <p className="text-sm">{item.title}</p>
                <p className="text-xs opacity-70">{item.titleEn}</p>
              </div>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
