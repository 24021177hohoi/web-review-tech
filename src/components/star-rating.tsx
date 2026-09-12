import { Star } from "lucide-react"

import { cn } from "@/lib/utils"

type StarRatingProps = {
  rating: number
  maxStars?: number
  size?: "sm" | "md" | "lg"
  showValue?: boolean
  className?: string
}

const sizeMap = {
  sm: "size-3.5",
  md: "size-5",
  lg: "size-7",
}

export function StarRating({
  rating,
  maxStars = 5,
  size = "md",
  showValue = false,
  className,
}: StarRatingProps) {
  const fullStars = Math.floor(rating)
  const hasHalf = rating - fullStars >= 0.25 && rating - fullStars < 0.75
  const roundedUp = rating - fullStars >= 0.75

  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: maxStars }, (_, index) => {
          const isFull = index < fullStars || (index === fullStars && roundedUp)
          const isHalf = index === fullStars && hasHalf

          return (
            <div key={index} className="relative">
              <Star
                className={cn(
                  sizeMap[size],
                  "text-amber-400 fill-amber-400"
                )}
              />
              {!isFull && (
                <Star
                  className={cn(
                    sizeMap[size],
                    "absolute inset-0 text-muted-foreground/30 fill-muted-foreground/20"
                  )}
                />
              )}
              {isHalf && (
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: "50%" }}
                >
                  <Star
                    className={cn(
                      sizeMap[size],
                      "text-amber-400 fill-amber-400"
                    )}
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>
      {showValue && (
        <span className="text-sm font-semibold tabular-nums text-foreground">
          {rating.toFixed(1)}
          <span className="text-muted-foreground font-normal">
            /{maxStars}
          </span>
        </span>
      )}
    </div>
  )
}
