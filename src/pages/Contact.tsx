import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log("Formulário enviado!");
    alert("Obrigado pelo seu contato! (Função de envio ainda não implementada)");
  };

  return (
    <main className="flex-grow container mx-auto px-4 py-12 flex items-center justify-center">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Entre em Contato</CardTitle>
          <CardDescription>
            Tem alguma pergunta ou sugestão? Preencha o formulário abaixo.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" placeholder="Seu nome" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="seu@email.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Mensagem</Label>
              <Textarea id="message" placeholder="Sua mensagem..." required />
            </div>
            <Button type="submit" className="w-full">Enviar Mensagem</Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
};

export default ContactPage;