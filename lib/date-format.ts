// Utility to format date as yyyy-MM-dd or dd/MM/yyyy or MM/dd/yyyy in a deterministic way
export function formatDate(dateString: string, format: 'DMY' | 'MDY' = 'DMY') {
  const date = new Date(dateString)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  if (format === 'DMY') {
    return `${day}/${month}/${year}`
  } else {
    return `${month}/${day}/${year}`
  }
}
