import { IconShieldCheck } from "@tabler/icons-react";

export default function PrivacyPolicyTab() {
  return (
    <div className="flex-1 mt-28 mb-8 mx-3 md:mx-12 bg-white/50 backdrop-blur-md p-8 rounded-lg shadow-xl">
      <div className="flex flex-col items-center text-blue-800 justify-center mb-6">
        <IconShieldCheck size={70} className="mb-1" />
        <h1 className="text-5xl font-bold text-center">
          Política de Privacidade
        </h1>
      </div>

      <div className="space-y-6">
        {/* Card 1: Introdução */}
        <div className="bg-white/50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">Introdução</h2>
          <p className="text-lg text-gray-700">
            Esta Política de Privacidade descreve como coletamos, usamos,
            protegemos e compartilhamos as informações pessoais dos usuários que
            utilizam os serviços da nossa plataforma escolar. Ao acessar nossos
            serviços, você concorda com os termos descritos nesta política.
          </p>
        </div>

        {/* Card 2: Informações Coletadas */}
        <div className="bg-white/50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">Informações Coletadas</h2>
          <p className="text-lg text-gray-700 mb-4">
            Coletamos as seguintes informações pessoais para fornecer acesso aos
            nossos serviços educacionais:
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
            <li>Gmail institucional fornecido pela instituição de ensino.</li>
            <li>Senha criada pela instituição para acesso aos serviços.</li>
            <li>RA (número de matrícula) do aluno, utilizado para identificação.</li>
          </ul>
        </div>

        {/* Card 3: Como Usamos Suas Informações */}
        <div className="bg-white/50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">Como Usamos Suas Informações</h2>
          <p className="text-lg text-gray-700 mb-4">
            Utilizamos suas informações para os seguintes fins:
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
            <li>Prover acesso aos serviços educacionais disponibilizados pela instituição.</li>
            <li>Facilitar a comunicação entre alunos e professores.</li>
            <li>Garantir a segurança e a autenticação de usuários na plataforma.</li>
            <li>Realizar análises sobre o uso da plataforma para melhorar a experiência do usuário.</li>
          </ul>
        </div>

        {/* Card 4: Segurança das Informações */}
        <div className="bg-white/50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">Segurança das Informações</h2>
          <p className="text-lg text-gray-700">
            Adotamos medidas técnicas e organizacionais para proteger suas
            informações pessoais contra acessos não autorizados, divulgação ou
            uso indevido. Isso inclui criptografia de dados e auditorias regulares de segurança.
          </p>
        </div>

        {/* Card 5: Seus Direitos */}
        <div className="bg-white/50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">Seus Direitos</h2>
          <p className="text-lg text-gray-700 mb-4">
            Você tem os seguintes direitos em relação às suas informações pessoais:
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
            <li>O direito de acessar, corrigir ou excluir suas informações pessoais.</li>
            <li>O direito de restringir ou se opor ao processamento de seus dados.</li>
            <li>O direito de solicitar a portabilidade de seus dados.</li>
            <li>O direito de retirar o consentimento a qualquer momento, sem comprometer a legalidade do processamento realizado antes dessa retirada.</li>
          </ul>
          <p className="text-lg text-gray-700 mt-2">
            Caso deseje exercer seus direitos, entre em contato conosco ou com um responsável da instituição.
          </p>
        </div>

        {/* Card 6: Retenção de Dados */}
        <div className="bg-white/50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">Retenção de Dados</h2>
          <p className="text-lg text-gray-700">
            Reteremos suas informações pessoais pelo tempo necessário para
            cumprir as finalidades descritas nesta Política de Privacidade ou
            conforme exigido por lei. Após esse período, suas informações serão
            descartadas ou anonimizadas.
          </p>
        </div>

        {/* Card 7: Alterações na Política */}
        <div className="bg-white/50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">Alterações na Política de Privacidade</h2>
          <p className="text-lg text-gray-700">
            Podemos atualizar esta Política de Privacidade periodicamente. Qualquer
            alteração será publicada nesta página, com a data de atualização
            mencionada no início do documento. Recomendamos que você revise esta
            política periodicamente.
          </p>
        </div>
      </div>
    </div>
  );
}
