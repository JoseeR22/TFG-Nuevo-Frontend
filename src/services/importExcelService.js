import { getJson, postForm } from "./apiClient";

const SPECIALITIES_URL = "https://daw11.arenadaw.com.es/api/speciality";
const IMPORT_DUTYS_URL = "https://daw11.arenadaw.com.es/api/importDuties";

export function isExcelFile(file) {
    const name = (file?.name || "").toLowerCase();
    const hasExt = name.endsWith(".xls") || name.endsWith(".xlsx");

    const allowedMimes = [
        "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ];
    const hasMime = allowedMimes.includes(file?.type);

    return hasExt || hasMime;
}

export async function getSpecialities({ onlyActive = true } = {}) {
    const data = await getJson(SPECIALITIES_URL);
    const list = Array.isArray(data) ? data : [];
    return onlyActive ? list.filter((s) => s.active !== false) : list;
}

export async function importDutysExcel({ file, year, month, idSpeciality }) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("year", String(year));
    formData.append("month", String(month).padStart(2, "0"));
    formData.append("idSpeciality", String(idSpeciality));

    return await postForm(IMPORT_DUTYS_URL, formData);
}
