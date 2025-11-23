import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema, type ContactResponse } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint - sends emails, no database storage
  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactFormSchema.parse(req.body);
      
      // Log the contact form submission
      // In production, integrate with email service (SendGrid, Resend, AWS SES)
      console.log("Contact form submission:", {
        name: data.name,
        email: data.email,
        message: data.message,
        timestamp: new Date().toISOString(),
      });

      // TODO: Send email via email service
      // Example with SendGrid:
      // await sendEmail({
      //   to: "anujagadde18@gmail.com",
      //   from: data.email,
      //   subject: `Portfolio Contact: ${data.name}`,
      //   text: data.message,
      // });

      const response: ContactResponse = { 
        success: true, 
        message: "Thank you for your message! I'll get back to you soon." 
      };
      
      res.json(response);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const response: ContactResponse = { 
          success: false, 
          message: error.errors[0].message 
        };
        res.status(400).json(response);
      } else {
        const response: ContactResponse = { 
          success: false, 
          message: "Something went wrong. Please try again." 
        };
        res.status(500).json(response);
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
