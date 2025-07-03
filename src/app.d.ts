/// <reference types="svelte-clerk/env" />

declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}

    interface PrivateMetadata {
      goalStar?: {
        onboarding?: string;
      };
    }
  }
}

export {};
