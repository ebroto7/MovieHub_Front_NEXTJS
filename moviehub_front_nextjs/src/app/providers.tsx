import { CommentsProvider } from "@/context/commentsContext"


export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CommentsProvider>
            {children}
        </CommentsProvider>
    )
}