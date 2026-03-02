import { cn } from '@/lib/utils'

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% {
            background-color: #E5E5E5;
          }
          50% {
            background-color: #F5F5F5;
          }
          100% {
            background-color: #E5E5E5;
          }
        }
        
        .skeleton-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
      <div
        data-slot="skeleton"
        className={cn('skeleton-shimmer rounded-md', className)}
        {...props}
      />
    </>
  )
}

export { Skeleton }
