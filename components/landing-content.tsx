"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Bernardo",
    avatar: "B",
    title: "Software Engineer",
    description:
      "My one stop shop for leveraging AI models from OpenAI, Replicate, and others.",
  },
  {
    name: "Alejandro",
    avatar: "A",
    title: "Graphic Designer",
    description:
      "I can quickly mock images for clients using generative AI as a starting point.",
  },
  {
    name: "Marianela",
    avatar: "M",
    title: "Creative Director",
    description:
      "Paleta has been my most used tool when it comes to drafting up mood boards for my clients.",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grild-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="border-none text-white bg-[#192339]"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0 font-medium">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
