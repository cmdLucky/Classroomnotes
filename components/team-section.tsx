import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TeamSection() {
  const teamMembers = [
    {
      name: "A教授",
      nameEn: "Prof. A",
      role: "項目總監",
      roleEn: "Project Director",
      department: "待補充機構信息",
      departmentEn: "Institution information to be provided",
      image: "/academic-portrait.png",
    },
    {
      name: "B博士",
      nameEn: "Dr. B",
      role: "文化遺產專家",
      roleEn: "Cultural Heritage Expert",
      department: "待補充機構信息",
      departmentEn: "Institution information to be provided",
      image: "/cultural-heritage-researcher.jpg",
    },
    {
      name: "C先生",
      nameEn: "Mr. C",
      role: "社區聯絡主任",
      roleEn: "Community Liaison Officer",
      department: "待補充機構信息",
      departmentEn: "Institution information to be provided",
      image: "/community-outreach-worker.jpg",
    },
    {
      name: "D女士",
      nameEn: "Ms. D",
      role: "生態保育專家",
      roleEn: "Ecological Conservation Expert",
      department: "待補充機構信息",
      departmentEn: "Institution information to be provided",
      image: "/environmental-conservation-expert.jpg",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">我們的團隊</h2>
          <p className="text-xl text-muted-foreground mb-6">Our Team</p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            由學者、專家和社區工作者組成的跨領域團隊，共同致力於鄉村文化遺產的保護與推廣工作。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{member.nameEn}</p>
                <p className="text-sm font-medium text-primary mb-1">{member.role}</p>
                <p className="text-xs text-muted-foreground mb-3">{member.roleEn}</p>
                <p className="text-xs text-muted-foreground text-pretty">{member.department}</p>
                <p className="text-xs text-muted-foreground/80 text-pretty">{member.departmentEn}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
