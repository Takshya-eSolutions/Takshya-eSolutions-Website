import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { cookiePolicy } from '../constants/policies';
import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';

export function CookiePolicy() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center p-4">
      <div className="w-full max-w-4xl">
        <Button variant="ghost" asChild className="mb-4">
          <Link to="/" className="flex items-center gap-2 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </Button>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="prose prose-lg max-w-none prose-headings:text-primary prose-a:text-primary hover:prose-a:text-primary/80 prose-ul:list-disc prose-ul:pl-6 prose-li:my-1.5 bg-card border border-border rounded-xl shadow-md p-8 md:p-12"
        >
          <h1 className="text-3xl font-bold mb-8">{cookiePolicy.title}</h1>
          <div className="space-y-6 text-muted-foreground">
            {cookiePolicy.content
              .split('\n')
              .filter(line => line.trim() !== '')
              .map((paragraph, index) => {
                if (paragraph.trim().match(/^\d+\./)) {
                  return (
                    <div key={index} className="space-y-2">
                      <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
                        {paragraph.trim()}
                      </h2>
                    </div>
                  );
                }
                return <p key={index}>{paragraph}</p>;
              })}
          </div>
          
          <div className="mt-12 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </motion.article>
      </div>
    </div>
  );
}

export default CookiePolicy;
