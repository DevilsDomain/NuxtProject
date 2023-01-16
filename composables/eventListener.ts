export function useEventListener(whicEvent: string, callback: any){

    onMounted(() => {
        window.addEventListener(whicEvent, callback)
    });
    
    onUnmounted(() => {
        window.removeEventListener(whicEvent, callback)
    });
}