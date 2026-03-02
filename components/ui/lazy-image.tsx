import { useState, useEffect } from "react"
import { cn } from '@/lib/utils'
import { Skeleton } from './skeleton'

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /**
   * Additional classes to apply to the outer wrapper (the sizing container).
   */
  wrapperClassName?: string
  /**
   * Classes that should be applied directly to the <img> element.
   */
  imgClassName?: string
}

export function LazyImage({
  wrapperClassName,
  imgClassName,
  src,
  alt,
  onLoad,
  ...props
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false)
  const [showSkeleton, setShowSkeleton] = useState(false)

  // Show skeleton only after 300ms of loading - avoids flashing for cached images
  useEffect(() => {
    if (loaded) {
      setShowSkeleton(false)
      return
    }

    const timer = setTimeout(() => {
      setShowSkeleton(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [loaded])

  const handleLoad: React.ReactEventHandler<HTMLImageElement> = (e) => {
    setLoaded(true)
    if (onLoad) {
      onLoad(e)
    }
  }

  return (
    <div className={cn('relative', wrapperClassName)}>
      {showSkeleton && <Skeleton className="absolute inset-0 w-full h-full" />}
      <img
        src={src}
        alt={alt}
        onLoad={handleLoad}
        className={cn(
          'w-full h-full transition-opacity duration-300',
          imgClassName,
          loaded ? 'opacity-100' : 'opacity-0'
        )}
        {...props}
      />
    </div>
  )
}
