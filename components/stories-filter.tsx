"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"

const categories = [
  { name: "全部", count: 80 },
  { name: "人物訪談", count: 25 },
  { name: "歷史追溯", count: 18 },
  { name: "生態發現", count: 22 },
  { name: "藝文創作", count: 15 },
]

const locations = [
  { name: "全部地點", count: 80 },
  { name: "梅子林", count: 28 },
  { name: "谷埔", count: 26 },
  { name: "吉澳", count: 26 },
]

export function StoriesFilter() {
  const [selectedCategory, setSelectedCategory] = useState("全部")
  const [selectedLocation, setSelectedLocation] = useState("全部地點")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="搜尋故事..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">類別：</span>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.name}
                    variant={selectedCategory === category.name ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.name)}
                    className="text-xs"
                  >
                    {category.name} ({category.count})
                  </Button>
                ))}
              </div>
            </div>

            {/* Location Filter */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">地點：</span>
              <div className="flex flex-wrap gap-2">
                {locations.map((location) => (
                  <Button
                    key={location.name}
                    variant={selectedLocation === location.name ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedLocation(location.name)}
                    className="text-xs"
                  >
                    {location.name} ({location.count})
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
