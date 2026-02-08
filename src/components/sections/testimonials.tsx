"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Marquee from "@/components/ui/marquee";
import { testimonials } from "@/lib/data";

function TestimonialCard({
  name,
  role,
  company,
  content,
}: {
  name: string;
  role: string;
  company: string;
  content: string;
}) {
  return (
    <div className="w-[350px] flex-shrink-0 p-6 bg-card border border-border rounded-xl">
      <Quote className="w-8 h-8 text-primary/50 mb-4" />
      <p className="text-muted-foreground mb-4 line-clamp-4">{content}</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-medium text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What <span className="text-primary">Clients</span> Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it. Here's what people I've worked with
            have to say about our collaboration.
          </p>
        </motion.div>
      </div>

      <Marquee pauseOnHover direction="left" speed={30}>
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            name={testimonial.name}
            role={testimonial.role}
            company={testimonial.company}
            content={testimonial.content}
          />
        ))}
      </Marquee>

      <div className="mt-6">
        <Marquee pauseOnHover direction="right" speed={25}>
          {[...testimonials].reverse().map((testimonial) => (
            <TestimonialCard
              key={`reverse-${testimonial.id}`}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              content={testimonial.content}
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
