"use client";
import { useOfflinePrompt } from "@/hooks";
export const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
	// regular check to see when user is offline
	useOfflinePrompt();

	return <>{children}</>;
};
