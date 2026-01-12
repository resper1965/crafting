'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'Telefone inválido').optional(),
  subject: z.string().min(3, 'Assunto deve ter pelo menos 3 caracteres'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
})

type ContactFormData = z.infer<typeof contactSchema>

interface ContactFormProps {
  className?: string
}

export default function ContactForm({ className = '' }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        toast({
          title: 'Mensagem enviada!',
          description: 'Entraremos em contato em breve.',
          variant: 'default',
        })
        reset()
      } else {
        toast({
          title: 'Erro ao enviar',
          description: result.error || 'Tente novamente mais tarde.',
          variant: 'destructive',
        })
      }
    } catch (error) {
      toast({
        title: 'Erro ao enviar',
        description: 'Erro ao enviar mensagem. Tente novamente mais tarde.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`space-y-6 ${className}`}>
      {/* Nome */}
      <div>
        <label htmlFor="name" className="block text-sm font-light text-crafting-cinzaAlvo/80 mb-2">
          Nome *
        </label>
        <input
          id="name"
          type="text"
          {...register('name')}
          className="w-full px-4 py-3 bg-crafting-chumbo border border-crafting-verde/20 rounded-sm text-crafting-branco font-light placeholder-crafting-cinzaAlvo/40 focus:outline-none focus:border-crafting-azul focus:ring-1 focus:ring-crafting-azul transition-colors"
          placeholder="Seu nome completo"
          disabled={isSubmitting}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-400 font-light">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-light text-crafting-cinzaAlvo/80 mb-2">
          Email *
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className="w-full px-4 py-3 bg-crafting-chumbo border border-crafting-verde/20 rounded-sm text-crafting-branco font-light placeholder-crafting-cinzaAlvo/40 focus:outline-none focus:border-crafting-azul focus:ring-1 focus:ring-crafting-azul transition-colors"
          placeholder="seu@email.com"
          disabled={isSubmitting}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-400 font-light">{errors.email.message}</p>
        )}
      </div>

      {/* Telefone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-light text-crafting-cinzaAlvo/80 mb-2">
          Telefone
        </label>
        <input
          id="phone"
          type="tel"
          {...register('phone')}
          className="w-full px-4 py-3 bg-crafting-chumbo border border-crafting-verde/20 rounded-sm text-crafting-branco font-light placeholder-crafting-cinzaAlvo/40 focus:outline-none focus:border-crafting-azul focus:ring-1 focus:ring-crafting-azul transition-colors"
          placeholder="(11) 99999-9999"
          disabled={isSubmitting}
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-400 font-light">{errors.phone.message}</p>
        )}
      </div>

      {/* Assunto */}
      <div>
        <label htmlFor="subject" className="block text-sm font-light text-crafting-cinzaAlvo/80 mb-2">
          Assunto *
        </label>
        <input
          id="subject"
          type="text"
          {...register('subject')}
          className="w-full px-4 py-3 bg-crafting-chumbo border border-crafting-verde/20 rounded-sm text-crafting-branco font-light placeholder-crafting-cinzaAlvo/40 focus:outline-none focus:border-crafting-azul focus:ring-1 focus:ring-crafting-azul transition-colors"
          placeholder="Assunto da mensagem"
          disabled={isSubmitting}
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-400 font-light">{errors.subject.message}</p>
        )}
      </div>

      {/* Mensagem */}
      <div>
        <label htmlFor="message" className="block text-sm font-light text-crafting-cinzaAlvo/80 mb-2">
          Mensagem *
        </label>
        <textarea
          id="message"
          {...register('message')}
          rows={6}
          className="w-full px-4 py-3 bg-crafting-chumbo border border-crafting-verde/20 rounded-sm text-crafting-branco font-light placeholder-crafting-cinzaAlvo/40 focus:outline-none focus:border-crafting-azul focus:ring-1 focus:ring-crafting-azul transition-colors resize-none"
          placeholder="Sua mensagem..."
          disabled={isSubmitting}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-400 font-light">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <motion.div
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
      >
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-crafting-azul hover:bg-crafting-azul/90 text-crafting-branco font-light tracking-wide rounded-sm px-8 py-6 h-auto transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin stroke-[1.5]" />
              Enviando...
            </>
          ) : (
            'Enviar Mensagem'
          )}
        </Button>
      </motion.div>
    </form>
  )
}
