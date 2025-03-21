import { z } from "zod";

const marsSchema = z.object({
        lote: z.string().min(4, "O lote deve conter 4 caracteres").max(4, "O lote deve conter no máximo 4 caracteres"),
        name: z.string().min(2, "Nome deve conter no mínimo 2 caracteres").max(50, "O nome deve conter no máximo 10 caracteres"),
        phone: z.string().min(3, "O telefone deve conter no mínimo 12 caracteres").max(15, "O telefone deve conter no máximo 15 caracteres"),
        id: z.string().min(3, "O seu ID deve conter 3 caracteres").max(3, "O ID deve conter no máximo 3 caracteres"),
        desc: z.string().min(5, "A descrição deve conter no mínimo 5 caracteres").max(160, "A descrição deve conter no máximo 160 caracteres"),
})  

export default marsSchema