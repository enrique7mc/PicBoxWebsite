import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Heading, Text, SerifItalic, Label } from '../ui';
import { Button } from '../ui';
import { Input } from '../ui';
import { AccentSquare } from '../ui';
import styles from './WaitlistForm.module.css';

interface FormData {
  email: string;
}

interface ApiResponse {
  success: boolean;
  message?: string;
  position?: number;
}

export function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [position, setPosition] = useState<number | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setApiError(null);

    try {
      // FreeWaitlists.com API integration
      const waitlistId = import.meta.env.VITE_WAITLIST_ID;
      const apiKey = import.meta.env.VITE_WAITLIST_API_KEY;

      if (!waitlistId || !apiKey) {
        // Demo mode - simulate success
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setPosition(Math.floor(Math.random() * 500) + 1);
        setIsSuccess(true);
        return;
      }

      const response = await fetch(
        `https://api.freewaitlists.com/v1/waitlists/${waitlistId}/subscribers`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({ email: data.email }),
        }
      );

      const result: ApiResponse = await response.json();

      if (response.ok && result.success) {
        setPosition(result.position || null);
        setIsSuccess(true);
      } else {
        setApiError(result.message || 'Failed to join waitlist. Please try again.');
      }
    } catch {
      setApiError('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <Heading as="h2" serif className={styles.title}>
            Be the <SerifItalic>first</SerifItalic> to know
          </Heading>
          <Text muted className={styles.subtitle}>
            Join the waitlist and get early access when PicBox launches.
          </Text>

          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="form"
                className={styles.form}
                onSubmit={handleSubmit(onSubmit)}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <div className={styles.inputGroup}>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    fullWidth
                    error={errors.email?.message}
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={styles.submitBtn}
                  >
                    {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                  </Button>
                </div>
                {apiError && (
                  <Text size="sm" className={styles.error}>
                    {apiError}
                  </Text>
                )}
              </motion.form>
            ) : (
              <motion.div
                key="success"
                className={styles.success}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className={styles.successIcon}>✓</div>
                <Text size="lg" className={styles.successText}>
                  You're on the list!
                </Text>
                {position && (
                  <div className={styles.positionBadge}>
                    <Label>Your position</Label>
                    <span className={styles.positionNumber}>#{position}</span>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <AccentSquare
            color="sage"
            size={16}
            rotate={8}
            className={styles.accentLeft}
          />
        </motion.div>
      </div>
    </section>
  );
}
