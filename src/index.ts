// Import necessary modules and types from Vendetta
import { createEffect, useState } from 'vendetta';

// Function to enable left swipe gesture
const enableLeftSwipeGesture = () => {
    const [memberListVisible, setMemberListVisible] = useState(false);

    // Effect to handle swipe gestures
    createEffect(() => {
        const handleTouchStart = (e: TouchEvent) => {
            const startX = e.touches[0].clientX;

            const handleTouchEnd = (e: TouchEvent) => {
                const endX = e.changedTouches[0].clientX;
                const swipeDistance = startX - endX;

                if (swipeDistance > 50) {
                    // Left swipe detected
                    setMemberListVisible(true);
                }

                // Remove event listener after touch end
                document.removeEventListener('touchend', handleTouchEnd);
            };

            // Attach touchend event listener
            document.addEventListener('touchend', handleTouchEnd);
        };

        // Attach touchstart event listener
        document.addEventListener('touchstart', handleTouchStart);

        // Cleanup function to remove event listeners
        return () => {
            document.removeEventListener('touchstart', handleTouchStart);
        };
    });

    // Render the member list based on the state
    return (
        <>
            {memberListVisible && (
                <div className="member-list">
                    {/* Render your member list here */}
                </div>
            )}
        </>
    );
};

// Export the function or hook
export default enableLeftSwipeGesture;
