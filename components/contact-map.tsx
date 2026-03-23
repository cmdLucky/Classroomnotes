export function ContactMap() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">位置地圖</h2>
          <p className="text-xl text-muted-foreground">Location Map</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-muted rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-video bg-gradient-to-br from-accent-green/20 to-accent-blue/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">香港中文大學</h3>
                <p className="text-muted-foreground">The Chinese University of Hong Kong</p>
                <p className="text-sm text-muted-foreground mt-2">
                  沙田, 新界, 香港 | Shatin, New Territories, Hong Kong
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <h4 className="font-semibold text-foreground mb-2">港鐵 / MTR</h4>
              <p className="text-sm text-muted-foreground">
                大學站 University Station
                <br />
                東鐵綫 East Rail Line
              </p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <h4 className="font-semibold text-foreground mb-2">巴士 / Bus</h4>
              <p className="text-sm text-muted-foreground">
                多條巴士路線直達
                <br />
                Multiple bus routes available
              </p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <h4 className="font-semibold text-foreground mb-2">泊車 / Parking</h4>
              <p className="text-sm text-muted-foreground">
                校園內設有停車場
                <br />
                On-campus parking available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
