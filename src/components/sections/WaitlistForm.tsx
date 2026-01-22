import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';
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
  const { t } = useTranslation('home');
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

      if (!waitlistId) {
        // Demo mode - simulate success
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setPosition(Math.floor(Math.random() * 500) + 1);
        setIsSuccess(true);
        return;
      }

      const response = await fetch(
        `https://api.freewaitlists.com/waitlists/${waitlistId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: data.email }),
        }
      );

      const result: ApiResponse = await response.json();

      if (response.ok && result.success) {
        setPosition(result.position || null);
        setIsSuccess(true);
      } else {
        setApiError(result.message || t('waitlistForm.errors.failed'));
      }
    } catch {
      setApiError(t('waitlistForm.errors.generic'));
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
            <Trans i18nKey="waitlistForm.title" ns="home">
              Be the <SerifItalic>first</SerifItalic> to know
            </Trans>
          </Heading>
          <Text muted className={styles.subtitle}>
            {t('waitlistForm.subtitle')}
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
                    placeholder={t('waitlistForm.placeholder')}
                    fullWidth
                    error={errors.email?.message}
                    {...register('email', {
                      required: t('waitlistForm.validation.required'),
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: t('waitlistForm.validation.invalid'),
                      },
                    })}
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={styles.submitBtn}
                  >
                    {isSubmitting ? t('waitlistForm.buttonLoading') : t('waitlistForm.button')}
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
                  {t('waitlistForm.success')}
                </Text>
                {position && (
                  <div className={styles.positionBadge}>
                    <Label>{t('waitlistForm.position')}</Label>
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
