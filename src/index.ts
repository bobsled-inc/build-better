import { Greeting } from "./greeting";

export const greeting: Greeting = {
  greetee: "World",
  greeter: "Krzysztof",
  occasion: "New Year",
};

export const generateGreeting = (
  greetee: string,
  greeter: string,
  occasion: string
): Greeting => ({
  greetee,
  greeter,
  occasion,
});
