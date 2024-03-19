import { NextRequest, NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
    auth: 'r8_cJ1KLzZ3aCkk3B95DHVnLeIKNgXKxhj0rXmIM',
});


export async function POST(request: NextRequest) {
    const { prompt } = await request.json();
    const sizes = [
      "704*1408",
      "704*1344",
      "768*1344",
      "768*1280",
      "832*1216",
      "832*1152",
      "896*1152",
      "896*1088",
      "960*1088",
      "960*1024",
      "1024*1024",
      "1024*960",
      "1088*960",
      "1088*896",
      "1152*896",
      "1152*832",
      "1216*832",
      "1280*768",
      "1344*768",
      "1344*704",
      "1408*704",
      "1472*704",
      "1536*640",
      "1600*640",
      "1664*576",
      "1728*576"
    ];
    const styles = [
      "Fooocus V2",
      "Fooocus Enhance",
      "Fooocus Sharp",
      "Fooocus Photograph",
      "Fooocus Cinematic",
      "SAI Analog Film",
      "SAI Fantasy Art",
      "SAI Comic Book"
    ]
    try {
        const output = await replicate.run(
            "konieshadow/fooocus-api:a7e8fa2f96b01d02584de2b3029a8452b9bf0c8fa4127a6d1cfd406edfad54fb",
            {
              input: {
                prompt: prompt,
                cn_type1: "ImagePrompt",
                cn_type2: "ImagePrompt",
                cn_type3: "ImagePrompt",
                cn_type4: "ImagePrompt",
                sharpness: 2,
                image_seed: 50403806253646856,
                uov_method: "Disabled",
                image_number: 4,
                guidance_scale: 4,
                refiner_switch: 0.5,
                negative_prompt: "",
                style_selections: "Fooocus V2,Fooocus Enhance,Fooocus Sharp,",
                uov_upscale_value: 0,
                outpaint_selections: "",
                outpaint_distance_top: 0,
                performance_selection: "Speed",
                outpaint_distance_left: 0,
                aspect_ratios_selection: "704*1408",
                outpaint_distance_right: 0,
                outpaint_distance_bottom: 0,
                inpaint_additional_prompt: ""
              }
            }
          );
          return NextResponse.json(output);
    } catch (error:any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}