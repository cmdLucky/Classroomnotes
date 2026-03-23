"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Lock, User } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AdminLoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  console.log("[v0] Admin login page loaded")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    console.log("[v0] Login attempt:", { username })

    try {
      if (username === "admin" && password === "password") {
        console.log("[v0] Login successful")
        localStorage.setItem("adminAuth", "true")
        router.push("/admin/dashboard")
      } else {
        setError("用户名或密码错误 / Incorrect username or password")
        console.log("[v0] Login failed: invalid credentials")
      }
    } catch (err) {
      setError("登录失败，请稍后重试 / Login failed, please try again")
      console.error("[v0] Login error:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-background p-4">
      <Card className="w-full max-w-md p-8 border-2 border-border">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">管理後台登入</h1>
          <p className="text-muted-foreground">Admin Backend System</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="username">用戶名 / Username</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                id="username"
                type="text"
                placeholder="admin"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">密碼 / Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                id="password"
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          {error && (
            <div className="p-3 bg-destructive/10 border border-destructive/30 rounded-md">
              <p className="text-sm text-destructive">{error}</p>
            </div>
          )}

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={loading}>
            {loading ? "登入中... / Logging in..." : "登入 / Login"}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <div className="p-3 bg-muted rounded-md">
            <p className="text-sm font-medium text-foreground mb-1">演示账号 / Demo Account</p>
            <p className="text-xs text-muted-foreground">用戶名 Username: admin</p>
            <p className="text-xs text-muted-foreground">密碼 Password: password</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
