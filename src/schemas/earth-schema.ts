import { z } from "zod";
const terraSchema = z.object({
        name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
        phone: z.string().min(3, "O telefone deve conter no mínimo 12 caracteres").max(15, "O telefone deve conter no máximo 15 caracteres"),
        id: z.string().min(3, "O seu ID deve conter 3 caracteres").max(3, "O ID deve conter no máximo 3 caracteres"),
        desc: z.string().min(5, "A descrição deve conter no mínimo 5 caracteres").max(160, "A descrição deve conter no máximo 160 caracteres"),
        addressLine: z.string().min(5, "Endereço muito curto"),
        num: z.string().min(1, "N° inválido"),
        state: z.any(),
        country: z.any(),
        city: z.string().min(2, "Cidade inválida"),
        zipCode: z.string().regex(/^\d{5}\d{3}$/, "CEP inválido. Use o formato 00000-000"),
});

export default terraSchema