"use client"

import type React from "react"
import { useState, useRef, useEffect, ChangeEvent } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { toast } from "@/hooks/use-toast"
import { ImageIcon, Upload, Trash2, Edit, Eye, LogOut, Plus, Search, Filter } from "lucide-react"
import { useGalleryStore, type GalleryImage } from "@/lib/gallery-store"

interface GalleryAdminProps {
  onLogout: () => void
}

export function GalleryAdmin({ onLogout }: GalleryAdminProps) {
  // Auto scroll to top on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [])
  const { images, addImages, updateImage, deleteImage } = useGalleryStore()
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
  const [editingImage, setEditingImage] = useState<GalleryImage | null>(null)
  const [viewingImage, setViewingImage] = useState<GalleryImage | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [cloudinaryUsage, setCloudinaryUsage] = useState<null | { used: number; max: number; free: number }>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Dynamic categories from images
  const categories: string[] = [
    "All",
    ...Array.from(new Set(images.map((img: GalleryImage) => img.category))).filter(Boolean) as string[]
  ]

  const filteredImages = images.filter((image: GalleryImage) => {
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || image.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  useEffect(() => {
    fetch("/api/cloudinary-usage")
      .then((res) => res.json())
      .then((data) => setCloudinaryUsage(data))
      .catch(() => setCloudinaryUsage(null))
  }, [])

  const handleUpload = () => {
    console.log("[v0] Upload button clicked")
    setIsUploadDialogOpen(true)
  }

  const handleFileSelect = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      console.log("[v0] Files selected:", files.length)

      const newImages: GalleryImage[] = []

      for (let i = 0; i < files.length; i++) {
        const file = files[i]

        // Convert file to base64 data URL
        const reader = new FileReader()
        const dataUrl = await new Promise<string>((resolve) => {
          reader.onload = (e) => resolve(e.target?.result as string)
          reader.readAsDataURL(file)
        })

        // Upload to Cloudinary
        try {
          console.log("[cloudinary] Uploading image to API...")
          const res = await fetch("/api/upload-image", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ image: dataUrl }),
          })
          const result = await res.json()
          if (res.ok && result.url) {
            console.log("[cloudinary] Upload success:", result.url)
            newImages.push({
              id: Date.now().toString() + i,
              src: result.url,
              title: file.name.replace(/\.[^/.]+$/, ""),
              category: "Campus Life",
              uploadDate: new Date().toISOString().split("T")[0],
              alt: file.name.replace(/\.[^/.]+$/, ""),
              description: `Uploaded image: ${file.name.replace(/\.[^/.]+$/, "")}`,
            })
          } else {
            console.error("[cloudinary] Upload failed:", result)
            toast({ title: "Upload Failed", description: result.error || "Unknown error", variant: "destructive" })
          }
        } catch (err) {
          console.error("[cloudinary] Upload error:", err)
          toast({ title: "Upload Error", description: String(err), variant: "destructive" })
        }
      }

      addImages(newImages)

      toast({
        title: "Upload Successful",
        description: `${files.length} image(s) uploaded successfully`,
      })
      setIsUploadDialogOpen(false)
    }
  }

  const handleDelete = (imageId: string) => {
    console.log("[v0] Delete image:", imageId)
    deleteImage(imageId)
    toast({
      title: "Image Deleted",
      description: "Image has been successfully removed from the gallery",
      variant: "destructive",
    })
  }

  const handleEdit = (image: GalleryImage) => {
    console.log("[v0] Edit image:", image.title)
    setEditingImage(image)
    setIsEditDialogOpen(true)
  }

  const handleView = (image: GalleryImage) => {
    console.log("[v0] View image clicked:", image.title)
    console.log("[v0] Setting viewingImage:", image)
    setViewingImage(image)
    console.log("[v0] Opening view dialog")
    setIsViewDialogOpen(true)
  }

  const handleSaveEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!editingImage) return

    const formData = new FormData(e.currentTarget)
    const updates = {
      title: formData.get("title") as string,
      category: formData.get("category") as string,
      description: formData.get("description") as string,
      alt: formData.get("title") as string,
    }

    updateImage(editingImage.id, updates)

    toast({
      title: "Image Updated",
      description: "Image details have been successfully updated",
    })

    setIsEditDialogOpen(false)
    setEditingImage(null)
  }

  const handleLogout = () => {
    console.log("[v0] Admin logout")
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out",
    })
    onLogout()
  }

  // For current month uploads
  const currentMonth = new Date().toISOString().slice(0, 7)

  // Popup image and text state for admin
  const [popupImageUrl, setPopupImageUrl] = useState<string | null>(null)
  const [isPopupUploadDialogOpen, setIsPopupUploadDialogOpen] = useState(false)
  const popupFileInputRef = useRef<HTMLInputElement>(null)
  // Popup text state
  const [popupHeader, setPopupHeader] = useState<string>("")
  const [popupParagraph, setPopupParagraph] = useState<string>("")
  // Formatting state
  const [headerBold, setHeaderBold] = useState(false)
  const [headerItalic, setHeaderItalic] = useState(false)
  const [headerUnderline, setHeaderUnderline] = useState(false)
  const [paraBold, setParaBold] = useState(false)
  const [paraItalic, setParaItalic] = useState(false)
  const [paraUnderline, setParaUnderline] = useState(false)

  // Load popup image and text from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = window.localStorage.getItem("popupImageUrl")
      if (url) setPopupImageUrl(url)
      const header = window.localStorage.getItem("popupHeader") || ""
      setPopupHeader(header)
      const para = window.localStorage.getItem("popupParagraph") || ""
      setPopupParagraph(para)
      setHeaderBold(window.localStorage.getItem("popupHeaderBold") === "1")
      setHeaderItalic(window.localStorage.getItem("popupHeaderItalic") === "1")
      setHeaderUnderline(window.localStorage.getItem("popupHeaderUnderline") === "1")
      setParaBold(window.localStorage.getItem("popupParaBold") === "1")
      setParaItalic(window.localStorage.getItem("popupParaItalic") === "1")
      setParaUnderline(window.localStorage.getItem("popupParaUnderline") === "1")
    }
  }, [])

  // Handle popup image upload
  const handlePopupFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      const file = files[0]
      const reader = new FileReader()
      const dataUrl = await new Promise<string>((resolve) => {
        reader.onload = (e) => resolve(e.target?.result as string)
        reader.readAsDataURL(file)
      })
      // Upload to Cloudinary
      try {
        const res = await fetch("/api/upload-image", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ image: dataUrl }),
        })
        const result = await res.json()
        if (res.ok && result.url) {
          if (typeof window !== "undefined") {
            window.localStorage.setItem("popupImageUrl", result.url)
            setPopupImageUrl(result.url) // update state after localStorage
          } else {
            setPopupImageUrl(result.url)
          }
          toast({ title: "Popup Image Set", description: "Popup image uploaded and set successfully." })
        } else {
          toast({ title: "Upload Failed", description: result.error || "Unknown error", variant: "destructive" })
        }
      } catch (err) {
        toast({ title: "Upload Error", description: String(err), variant: "destructive" })
      }
      setIsPopupUploadDialogOpen(false)
    }
  }

  const handlePopupFileSelect = () => {
    popupFileInputRef.current?.click()
  }

  const handleRemovePopupImage = () => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("popupImageUrl")
      setPopupImageUrl(null)
    } else {
      setPopupImageUrl(null)
    }
    toast({ title: "Popup Image Removed", description: "Popup image has been removed." })
  }

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {/* Popup Image & Text Upload Section */}
        <div className="mb-8 p-4 rounded bg-yellow-50 border border-yellow-200">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold text-yellow-900">Home Page Popup Content</span>
            <Button size="sm" variant="outline" onClick={() => setIsPopupUploadDialogOpen(true)}>
              Upload Popup Image
            </Button>
          </div>
          {popupImageUrl ? (
            <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
              <img src={popupImageUrl} alt="Popup Preview" className="rounded shadow max-h-40" />
              <Button size="sm" variant="destructive" onClick={handleRemovePopupImage}>
                Remove Popup Image
              </Button>
            </div>
          ) : (
            <p className="text-muted-foreground text-sm mb-4">No popup image set for home page.</p>
          )}
          {/* Popup Header Text */}
          <div className="mb-2">
            <label className="block font-semibold mb-1">Popup Header (max 60 chars)</label>
            <div className="flex gap-2 mb-1">
              <Button size="sm" variant={headerBold ? "default" : "outline"} onClick={() => setHeaderBold((v: boolean) => {window.localStorage.setItem("popupHeaderBold", !v ? "1" : "0"); return !v})}><b>B</b></Button>
              <Button size="sm" variant={headerItalic ? "default" : "outline"} onClick={() => setHeaderItalic((v: boolean) => {window.localStorage.setItem("popupHeaderItalic", !v ? "1" : "0"); return !v})}><i>I</i></Button>
              <Button size="sm" variant={headerUnderline ? "default" : "outline"} onClick={() => setHeaderUnderline((v: boolean) => {window.localStorage.setItem("popupHeaderUnderline", !v ? "1" : "0"); return !v})}><u>U</u></Button>
            </div>
            <Input
              maxLength={60}
              value={popupHeader}
              onChange={(e: ChangeEvent<HTMLInputElement>) => { setPopupHeader(e.target.value); if (typeof window !== "undefined") window.localStorage.setItem("popupHeader", e.target.value) }}
              placeholder="Enter popup header..."
            />
          </div>
          {/* Popup Paragraph Text */}
          <div className="mb-2">
            <label className="block font-semibold mb-1">Popup Paragraph (max 160 chars)</label>
            <div className="flex gap-2 mb-1">
              <Button size="sm" variant={paraBold ? "default" : "outline"} onClick={() => setParaBold((v: boolean) => {window.localStorage.setItem("popupParaBold", !v ? "1" : "0"); return !v})}><b>B</b></Button>
              <Button size="sm" variant={paraItalic ? "default" : "outline"} onClick={() => setParaItalic((v: boolean) => {window.localStorage.setItem("popupParaItalic", !v ? "1" : "0"); return !v})}><i>I</i></Button>
              <Button size="sm" variant={paraUnderline ? "default" : "outline"} onClick={() => setParaUnderline((v: boolean) => {window.localStorage.setItem("popupParaUnderline", !v ? "1" : "0"); return !v})}><u>U</u></Button>
            </div>
            <Input
              maxLength={160}
              value={popupParagraph}
              onChange={(e: ChangeEvent<HTMLInputElement>) => { setPopupParagraph(e.target.value); if (typeof window !== "undefined") window.localStorage.setItem("popupParagraph", e.target.value) }}
              placeholder="Enter popup paragraph..."
            />
          </div>
          {/* Preview */}
          <div className="mt-4 p-3 border rounded bg-white">
            <div className="mb-2" style={{
              fontWeight: headerBold ? "bold" : "normal",
              fontStyle: headerItalic ? "italic" : "normal",
              textDecoration: headerUnderline ? "underline" : "none",
              fontSize: "1.25rem"
            }}>{popupHeader}</div>
            <div style={{
              fontWeight: paraBold ? "bold" : "normal",
              fontStyle: paraItalic ? "italic" : "normal",
              textDecoration: paraUnderline ? "underline" : "none"
            }}>{popupParagraph}</div>
          </div>
        </div>
        {/* Popup Image Upload Dialog */}
        <Dialog open={isPopupUploadDialogOpen} onOpenChange={setIsPopupUploadDialogOpen}>
          <DialogContent
            className="w-full max-w-full sm:max-w-[425px] p-2 sm:p-4 rounded-2xl shadow-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mx-1 sm:mx-2 overflow-x-hidden box-border"
            style={{ maxWidth: '100vw', boxSizing: 'border-box' }}
          >
            <DialogHeader>
              <DialogTitle className="text-base sm:text-xl text-center font-bold">Upload Popup Image</DialogTitle>
            </DialogHeader>
            <div className="space-y-3 sm:space-y-4">
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-xl p-3 sm:p-8 text-center flex flex-col items-center justify-center">
                <Upload className="h-8 w-8 sm:h-12 sm:w-12 text-muted-foreground mx-auto mb-3 sm:mb-4" />
                <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-lg">Click to select an image for the home page popup</p>
                <Button onClick={handlePopupFileSelect} className="w-full max-w-xs text-sm sm:text-base py-2 rounded-lg">Select Image</Button>
                <input
                  ref={popupFileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handlePopupFileChange}
                  className="hidden"
                />
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground text-center">
                Supported formats: JPG, PNG, GIF, WebP (Max 10MB)
              </p>
            </div>
          </DialogContent>
        </Dialog>
  {/* Cloudinary Storage Usage */}
        {cloudinaryUsage && (
          <div className="mb-4 p-4 rounded bg-blue-50 border border-blue-200 flex items-center gap-4">
            <span className="font-semibold text-blue-900">Cloudinary Storage:</span>
            <span className="text-blue-800">
              {((cloudinaryUsage.used / (1024*1024)).toFixed(2))} MB used /
              {(cloudinaryUsage.max / (1024*1024*1024)).toFixed(0)} GB free tier
              ({((cloudinaryUsage.used / cloudinaryUsage.max) * 100).toFixed(1)}% used)
            </span>
          </div>
        )}

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-serif font-bold text-primary mb-2">Gallery Management</h1>
              <p className="text-muted-foreground">Upload, edit, and manage school gallery images</p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                {images.length} Images
              </Badge>
              <Button variant="outline" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm">Total Images</p>
                    <p className="text-2xl font-bold text-primary">{images.length}</p>
                  </div>
                  <ImageIcon className="h-8 w-8 text-accent" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm">Categories</p>
                    <p className="text-2xl font-bold text-primary">{categories.length - 1}</p>
                  </div>
                  <Filter className="h-8 w-8 text-accent" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm">This Month</p>
                    <p className="text-2xl font-bold text-primary">
                      {images.filter((img: GalleryImage) => img.uploadDate.startsWith(currentMonth)).length}
                    </p>
                  </div>
                  <Upload className="h-8 w-8 text-accent" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Controls */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Gallery Controls</CardTitle>
                <Button onClick={handleUpload}>
                  <Plus className="h-4 w-4 mr-2" />
                  Upload Images
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search images..."
                      value={searchTerm}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="md:w-48">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  >
                      {categories.map((category: string) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Gallery Grid */}
          <Card>
            <CardHeader>
              <CardTitle>Gallery Images ({filteredImages.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {filteredImages.map((image: GalleryImage) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="relative group"
                  >
                    <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                      <img
                        src={image.src || "/placeholder.svg"}
                        alt={image.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                      <div className="flex gap-1">
                        <Button size="sm" variant="secondary" onClick={() => handleView(image)}>
                          <Eye className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="secondary" onClick={() => handleEdit(image)}>
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="secondary"
                          className="text-red-600 hover:text-red-700"
                          onClick={() => handleDelete(image.id)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm font-medium truncate">{image.title}</p>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {image.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{image.uploadDate}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              {filteredImages.length === 0 && (
                <div className="text-center py-12">
                  <ImageIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No images found</p>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Upload Dialog */}
        <Dialog open={isUploadDialogOpen} onOpenChange={setIsUploadDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Upload Images</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground mb-4">Click to select images or drag and drop</p>
                <Button onClick={handleFileSelect}>Select Images</Button>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
              <p className="text-xs text-muted-foreground text-center">
                Supported formats: JPG, PNG, GIF, WebP (Max 10MB each)
              </p>
            </div>
          </DialogContent>
        </Dialog>

        {/* View Dialog */}
        <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
          <DialogContent className="sm:max-w-[600px] w-full max-w-full overflow-x-hidden box-border">
            <DialogHeader>
              <DialogTitle>View Image</DialogTitle>
            </DialogHeader>
            {viewingImage ? (
              <div className="space-y-4">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden w-full max-w-full">
                  <img
                    src={viewingImage.src || "/placeholder.svg"}
                    alt={viewingImage.title}
                    className="w-full h-full object-contain max-w-full"
                    onLoad={() => console.log("[v0] Image loaded successfully")}
                    onError={() => console.log("[v0] Image failed to load")}
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{viewingImage.title}</h3>
                  <p className="text-muted-foreground">{viewingImage.description}</p>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{viewingImage.category}</Badge>
                    <span className="text-sm text-muted-foreground">Uploaded: {viewingImage.uploadDate}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No image selected</p>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Edit Dialog */}
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Image</DialogTitle>
            </DialogHeader>
            {editingImage && (
              <form onSubmit={handleSaveEdit} className="space-y-4">
                <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-4">
                  <img
                    src={editingImage.src || "/placeholder.svg"}
                    alt={editingImage.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title">Image Title</Label>
                  <Input id="title" name="title" defaultValue={editingImage.title} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Input id="description" name="description" defaultValue={editingImage.description} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <select
                    id="category"
                    name="category"
                    defaultValue={editingImage.category}
                    className="w-full p-2 border rounded-md"
                    required
                  >
                    {categories.slice(1).map((category: string) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex justify-end gap-2">
                  <Button type="button" variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">Save Changes</Button>
                </div>
              </form>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
