
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
    return (
        <footer className="bg-muted py-8 border-t">
          <div className="container max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <Link href="#" className="flex items-center gap-2" prefetch={false}>
               <Image className="w-8 h-8" src="/icon.svg" alt="logo" width={32} height={32} />
                <span className="text-lg font-semibold">AI Content Generator  AIT</span>
              </Link>
              <p className="text-muted-foreground text-sm max-w-[300px]">
                Effortlessly create high-quality content with our advanced AI technology.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                Privacy Policy
              </Link>
              <div className="flex items-center gap-3">
                <Link href="#" aria-label="Twitter" prefetch={false}>
                  <TwitterIcon className="w-5 h-5 text-muted-foreground hover:text-primary" />
                </Link>
                <Link href="#" aria-label="Facebook" prefetch={false}>
                  <FacebookIcon className="w-5 h-5 text-muted-foreground hover:text-primary" />
                </Link>
                <Link href="#" aria-label="Instagram" prefetch={false}>
                  <InstagramIcon className="w-5 h-5 text-muted-foreground hover:text-primary" />
                </Link>
              </div>
            </div>
          </div>
        </footer>
      )
}