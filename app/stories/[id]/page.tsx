import { Navigation } from "@/components/navigation"
import { StoryDetail } from "@/components/story-detail"
import { RelatedStories } from "@/components/related-stories"
import { notFound } from "next/navigation"

// Mock story data - in a real app, this would come from a database
const stories = {
  "grandmother-lau-hakka-heritage": {
    id: "grandmother-lau-hakka-heritage",
    title: "劉婆婆的客家記憶",
    subtitle: "梅子林最後的守護者",
    author: "陳文華",
    location: "梅子林",
    category: "人物訪談",
    readTime: "8分鐘",
    publishDate: "2024-03-10",
    views: 3240,
    likes: 189,
    image: "/beautiful-terraced-fields-and-traditional-village-.jpg",
    tags: ["客家文化", "口述歷史", "村落變遷", "文化傳承"],
    content: `
      <p>八十歲的劉婆婆坐在梅子林村口的石階上，望著眼前層層疊疊的梯田，眼中閃爍著歲月的光芒。她是這個村落最年長的居民，也是客家文化最忠實的守護者。</p>
      
      <h2>童年的記憶</h2>
      <p>「我小時候，這裡可熱鬧了。」劉婆婆用帶著濃重客家口音的粵語說道。「每家每戶都在種田，梯田裡種滿了稻米和蔬菜。春天的時候，整個山坡都是綠油油的，美得很。」</p>
      
      <p>她回憶起童年時光，那時的梅子林有三十多戶人家，村裡的孩子們在梯田間嬉戲玩耍，大人們日出而作，日落而息。客家話在村子裡響起，傳統的客家歌謠在田間飄蕩。</p>
      
      <h2>變遷的歲月</h2>
      <p>隨著時代的變遷，年輕人紛紛離開村子到城市打拼，梅子林逐漸變得冷清。「最困難的時候，整個村子只剩下五六戶人家。」劉婆婆的聲音中帶著一絲哀傷。</p>
      
      <p>但她從未想過離開。「這裡是我的根，是我祖先生活過的地方。客家人的傳統不能在我這一代斷掉。」</p>
      
      <h2>藝術復興的見證</h2>
      <p>近年來，隨著藝術復興項目的開展，梅子林重新煥發了生機。當代藝術家們來到村子，與村民們一起創作，為古老的村落注入了新的活力。</p>
      
      <p>「我很高興看到年輕人又回來了，雖然他們說的話我不太懂，但我知道他們是真心愛這個地方的。」劉婆婆笑著說。</p>
      
      <h2>文化的傳承</h2>
      <p>作為村裡最年長的居民，劉婆婆成了客家文化的活字典。她會做傳統的客家菜，會唱古老的客家山歌，會講村子裡的歷史故事。</p>
      
      <p>「我希望這些傳統能夠傳下去。」她說，「不管村子怎麼變，客家人的根不能忘。」</p>
      
      <p>夕陽西下，劉婆婆起身準備回家。她的身影在梯田間顯得格外堅韌，就像這片土地上的客家文化一樣，歷經風雨而不倒，在新時代中繼續綻放光芒。</p>
    `,
  },
}

interface StoryPageProps {
  params: {
    id: string
  }
}

export default function StoryPage({ params }: StoryPageProps) {
  const story = stories[params.id as keyof typeof stories]

  if (!story) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <StoryDetail story={story} />
      <RelatedStories currentStoryId={story.id} />
    </main>
  )
}
