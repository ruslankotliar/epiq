import { getOrderHistory, getRestaurantDishes } from "@src/queries/customer";
import { generateSuggestions } from "@src/utils/openai";
import { createSupabaseServerClient } from "@src/utils/supabase/serverClient";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const supabase = createSupabaseServerClient();
    const { data: menuDishes } = await getRestaurantDishes(supabase);

    const {
      data: {
        user: { id },
      },
    } = await supabase.auth.getUser();

    const OrderHistory = await getOrderHistory(supabase, id);
    if (!OrderHistory || OrderHistory.length === 0) {
      throw new Error("No orders found for user.");
    }

    /**
     * We can use the user ID to fetch the user's order history from the database
     * for now we will use a mock order history
     */

    // const gptSuggestedDishIds = await generateSuggestions(
    //   OrderHistory,
    //   menuDishes,
    // );

    return NextResponse.json({ gptSuggestedDishIds: [] });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
