import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "n1axsdxp",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skYB5V4vFfGg9VUCqye6IB12sSvVy2sXuWmc1IQ7TbUE0hSdiqgSWKY8WWYxY0PttFVCrpoRCXpJcs0DvHaBxPEzjLEGHIhQK0ho1EDXpyWWBVYsKJtyRbawZ0oe3slCkP8gUANDVSMdqu0XpDzTzPY88ZM5DzcJYNuUMGyYXwJpSRS5ydGL",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
