import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Validação básica
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: 'Campos obrigatórios não preenchidos' },
        { status: 400 }
      )
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    // Aqui você pode integrar com:
    // 1. Resend (recomendado para produção)
    // 2. EmailJS (client-side, mais simples)
    // 3. Nodemailer (requer SMTP)
    // 4. Serviço de email próprio

    // Por enquanto, apenas logamos (substitua por envio real de email)
    console.log('📧 Nova mensagem de contato:', {
      name: body.name,
      email: body.email,
      phone: body.phone,
      subject: body.subject,
      message: body.message,
      timestamp: new Date().toISOString(),
    })

    // TODO: Implementar envio de email real
    // Exemplo com Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'contato@craftingsolutions.com.br',
    //   to: 'contato@craftingsolutions.com.br',
    //   subject: `Nova mensagem: ${body.subject}`,
    //   html: `
    //     <h2>Nova mensagem de contato</h2>
    //     <p><strong>Nome:</strong> ${body.name}</p>
    //     <p><strong>Email:</strong> ${body.email}</p>
    //     <p><strong>Telefone:</strong> ${body.phone || 'Não informado'}</p>
    //     <p><strong>Assunto:</strong> ${body.subject}</p>
    //     <p><strong>Mensagem:</strong></p>
    //     <p>${body.message}</p>
    //   `,
    // })

    return NextResponse.json(
      { 
        success: true,
        message: 'Mensagem recebida com sucesso. Entraremos em contato em breve.' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erro ao processar formulário de contato:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor. Tente novamente mais tarde.' },
      { status: 500 }
    )
  }
}
