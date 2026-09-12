import { useState } from "react"
import {
  Check,
  Copy,
  ShoppingCart,
  Tag,
  ThumbsUp,
  ThumbsDown,
  TrendingDown,
  Keyboard,
  Gauge,
  Shield,
  Wallet,
  Calendar,
  X,
} from "lucide-react"
import { toast } from "sonner"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { StarRating } from "@/components/star-rating"

type Criterion = {
  name: string
  icon: typeof Keyboard
  rating: number
  description: string
}

const criteria: Criterion[] = [
  {
    name: "Thiết kế",
    icon: Keyboard,
    rating: 4.5,
    description:
      "Form factor 60% nhỏ gọn, tiết kiệm diện tích bàn. RGB backlight 16.8 triệu màu rực rỡ. Keycap PBT two-tone chắc chắn, không bóng dầu sau 3 tháng.",
  },
  {
    name: "Hiệu năng",
    icon: Gauge,
    rating: 4.0,
    description:
      "Switch Red linear mượt mà, latency thấp khi chơi game. Kết nối Bluetooth 5.0 + 2.4GHz ổn định, không drop kết nối. Pin trâu, 8-10 giờ RGB liên tục.",
  },
  {
    name: "Độ bền",
    icon: Shield,
    rating: 4.5,
    description:
      "Vỏ nhựa ABS nhưng cứng cáp, không kêu ọp ẹp. Keycap PBT không mòn chữ sau 3 tháng gõ cường độ cao. Chống nước IP6X nhẹ.",
  },
  {
    name: "Đáng tiền (P/P)",
    icon: Wallet,
    rating: 5.0,
    description:
      "Giá chỉ ~1.1 triệu VNĐ cho bàn phím cơ không dây 60% RGB — quá hợp lý so với đối thủ cùng phân khúc. Bảo hành chính hãng 12 tháng.",
  },
]

const pros = [
  "Form factor 60% siêu nhỏ gọn, dễ mang theo",
  "RGB backlight 16.8 triệu màu, tùy chỉnh phức tạp",
  "Keycap PBT two-tone chất lượng cao, không mòn chữ",
  "Kết nối 3 chế độ: USB-C, Bluetooth 5.0, 2.4GHz",
  "Pin trâu — 8-10 giờ liên tục với RGB bật",
]

const cons = [
  "Không có arrow keys riêng, cần quen phím tắt Fn",
  "Vỏ nhựa, không có option vỏ kim loại",
  "Phần mềm điều khiển RGB hơi rườm rà",
]

export function ReviewPage() {
  const [copied, setCopied] = useState(false)

  const handleCopyCode = () => {
    navigator.clipboard.writeText("RK61REVIEW10")
    setCopied(true)
    toast.success("Đã sao chép mã giảm giá!", {
      description: "Mã: RK61REVIEW10 — Giảm 10% tại Shopee/Tiki",
    })
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-svh bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3.5">
          <div className="flex items-center gap-2.5">
            <div className="flex size-8 items-center justify-center rounded-lg bg-slate-900">
              <Keyboard className="size-4 text-white" />
            </div>
            <span className="text-base font-bold tracking-tight text-slate-900">
              TechReview
            </span>
          </div>
          <Badge
            variant="secondary"
            className="border border-slate-200 bg-white text-slate-600 shadow-sm"
          >
            Affiliate Review
          </Badge>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-6 sm:py-10">
        {/* === 1. QUICK VERDICT === */}
        <section className="space-y-5">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Calendar className="size-4" />
              <span>Cập nhật: 12/09/2026</span>
              <span className="text-slate-300">·</span>
              <span>Bởi TechReview Team</span>
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 text-balance sm:text-3xl">
              Đánh giá chi tiết Bàn phím cơ không dây RK61 sau 3 tháng sử dụng
            </h1>
          </div>

          {/* Product image */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <img
              src="/rk61-keyboard.webp"
              alt="Bàn phím cơ không dây RK61"
              className="w-full object-cover"
            />
          </div>

          {/* Overall rating + quick verdict */}
          <Card className="border-slate-200 shadow-sm">
            <CardContent className="pt-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-slate-500">
                    Điểm đánh giá tổng quan
                  </p>
                  <div className="flex items-center gap-3">
                    <StarRating rating={4.5} size="lg" showValue />
                    <Badge className="rounded-full bg-amber-100 text-amber-700 hover:bg-amber-100">
                      Xuất sắc
                    </Badge>
                  </div>
                </div>
                <div className="flex flex-col gap-2 sm:items-end">
                  <Badge className="w-fit rounded-full bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                    <TrendingDown className="size-3" />
                    Giá tốt nhất hôm nay
                  </Badge>
                  <p className="text-sm text-slate-500">
                    Giá tham khảo:{" "}
                    <span className="font-bold text-slate-900">
                      1.190.000đ
                    </span>
                  </p>
                </div>
              </div>

              <Separator className="my-5 bg-slate-100" />

              {/* Ai nên mua / Ai không nên mua */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-blue-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-2 flex items-center gap-2.5">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-blue-100">
                      <ThumbsUp className="size-4 text-blue-600" />
                    </div>
                    <span className="text-sm font-bold text-blue-900">
                      Ai nên mua
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Người cần bàn phím cơ nhỏ gọn để mang đi, game thủ thích
                    switch Red mượt, ai muốn RGB đẹp trong tầm giá 1 triệu.
                  </p>
                </div>
                <div className="rounded-xl border border-orange-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-2 flex items-center gap-2.5">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-orange-100">
                      <ThumbsDown className="size-4 text-orange-600" />
                    </div>
                    <span className="text-sm font-bold text-orange-900">
                      Ai không nên mua
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Người cần arrow keys riêng, ai thích vỏ kim loại, hoặc cần
                    macro phức tạp cho công việc chuyên dụng.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* === 2. PROS & CONS === */}
        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
            Ưu điểm & Nhược điểm
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Pros */}
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <div className="mb-4 flex items-center gap-2.5">
                <div className="flex size-9 items-center justify-center rounded-xl bg-emerald-500 shadow-sm shadow-emerald-500/30">
                  <Check className="size-5 text-white" />
                </div>
                <h3 className="text-base font-bold text-emerald-900">
                  Ưu điểm
                </h3>
              </div>
              <div className="space-y-3">
                {pros.map((pro, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-200">
                      <Check className="size-3 text-emerald-700" />
                    </div>
                    <span className="text-sm leading-relaxed text-emerald-950">
                      {pro}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cons */}
            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
              <div className="mb-4 flex items-center gap-2.5">
                <div className="flex size-9 items-center justify-center rounded-xl bg-rose-500 shadow-sm shadow-rose-500/30">
                  <X className="size-5 text-white" />
                </div>
                <h3 className="text-base font-bold text-rose-900">
                  Nhược điểm
                </h3>
              </div>
              <div className="space-y-3">
                {cons.map((con, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-rose-200">
                      <X className="size-3 text-rose-700" />
                    </div>
                    <span className="text-sm leading-relaxed text-rose-950">
                      {con}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* === 3. DETAILED RATINGS === */}
        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
            Đánh giá chi tiết theo tiêu chí
          </h2>
          <Card className="border-slate-200 shadow-sm">
            <CardContent className="space-y-6 pt-6">
              {criteria.map((criterion, index) => {
                const Icon = criterion.icon
                const percentage = (criterion.rating / 5) * 100
                return (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2.5">
                        <div className="flex size-9 items-center justify-center rounded-xl bg-slate-100">
                          <Icon className="size-4 text-slate-600" />
                        </div>
                        <span className="text-sm font-bold text-slate-900">
                          {criterion.name}
                        </span>
                      </div>
                      <StarRating rating={criterion.rating} size="sm" showValue />
                    </div>
                    <Progress
                      value={percentage}
                      className="h-2.5 bg-slate-100 [&>div]:bg-gradient-to-r [&>div]:from-amber-400 [&>div]:to-amber-500"
                    />
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {criterion.description}
                    </p>
                    {index < criteria.length - 1 && (
                      <Separator className="mt-6 bg-slate-100" />
                    )}
                  </div>
                )
              })}
            </CardContent>
          </Card>
        </section>

        {/* === 4. AFFILIATE CTA === */}
        <section className="mt-10">
          <Card className="overflow-hidden border-slate-200 shadow-lg shadow-slate-200/50">
            <div className="bg-gradient-to-br from-amber-50 via-white to-blue-50">
              <CardContent className="space-y-5 p-6 sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge className="rounded-full bg-amber-500 text-amber-950 shadow-sm shadow-amber-500/30 hover:bg-amber-500">
                        <Tag className="size-3" />
                        Deal giá tốt nhất
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold tracking-tight text-slate-900">
                      Mua RK61 ngay hôm nay
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-extrabold text-slate-900">
                        1.190.000đ
                      </span>
                      <span className="text-base text-slate-400 line-through">
                        1.490.000đ
                      </span>
                      <Badge className="rounded-full bg-rose-100 text-rose-700 hover:bg-rose-100">
                        -20%
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Coupon code */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-2.5 rounded-xl border-2 border-dashed border-amber-300 bg-amber-50 px-4 py-3">
                    <Tag className="size-4 text-amber-600" />
                    <span className="text-sm font-mono font-bold tracking-wider text-slate-900">
                      RK61REVIEW10
                    </span>
                    <span className="text-xs font-medium text-amber-700">
                      — Giảm 10%
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCopyCode}
                    className="w-fit border-slate-300 bg-white text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50"
                  >
                    {copied ? (
                      <>
                        <Check className="size-3.5 text-emerald-600" />
                        Đã sao chép
                      </>
                    ) : (
                      <>
                        <Copy className="size-3.5" />
                        Sao chép mã giảm giá
                      </>
                    )}
                  </Button>
                </div>

                {/* Buy buttons */}
                <div className="grid gap-3 sm:grid-cols-2">
                  <Button
                    size="lg"
                    className="h-14 rounded-xl text-base font-bold text-white shadow-lg shadow-orange-500/30 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/40"
                    style={{ backgroundColor: "#ee4d2d" }}
                    asChild
                  >
                    <a href="#" rel="nofollow sponsored">
                      <ShoppingCart className="size-5" />
                      Mua trên Shopee
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    className="h-14 rounded-xl text-base font-bold text-white shadow-lg shadow-blue-500/30 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/40"
                    style={{ backgroundColor: "#1a94ff" }}
                    asChild
                  >
                    <a href="#" rel="nofollow sponsored">
                      <ShoppingCart className="size-5" />
                      Mua trên Tiki
                    </a>
                  </Button>
                </div>

                <p className="text-center text-xs text-slate-400">
                  Lưu ý: Giá và mã giảm giá có thể thay đổi theo thời gian. Chúng
                  tôi có thể nhận hoa hồng khi bạn mua qua liên kết này.
                </p>
              </CardContent>
            </div>
          </Card>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-6">
        <p className="text-center text-xs text-slate-400">
          © 2026 TechReview — Review sản phẩm công nghệ uy tín
        </p>
      </footer>
    </div>
  )
}
