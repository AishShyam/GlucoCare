import Medicine from '../models/MedicineModel.js'
import { NotFoundError } from '../errors/customErrors.js'

export const getAllMedicineValue = async (req, res) => {
    const medicineData = await Medicine.find({createdBy: req.user.userId})
    res.status(200).json({ medicineData })
}

export const createMedicineValue = async (req,res) => {
    req.body.createdBy = req.user.userId
    const medicineValue = await Medicine.create(req.body)
    res.status(200).json({ medicineValue })
}

export const getMedicineValue = async (req, res) => {
    const {id} = req.params
    const medicineValue = await Medicine.findById(id)
    if (!medicineValue) throw new NotFoundError(`no medicine value with that id`)
    res.status(200).json({ medicineValue })
}

export const updateMedicineValue = async (req,res) => {
    const {id} = req.params
    const medicineValue = await Medicine.findByIdAndUpdate(id, req.body, {
        new:true
    })
    if(!medicineValue) throw new NotFoundError(`no medicine value with that id`)
    res.status(200).json({ msg: 'medicine modified', medicineValue })
}

export const deleteMedicineValue = async (req,res) => {
    const {id} = req.params
    const medicineValue = await Medicine.findByIdAndDelete(id)
    if (!medicineValue) throw new NotFoundError(`no medicine value with that id`)
    res.status(200).json({ msg: 'medicine deleted' })
}