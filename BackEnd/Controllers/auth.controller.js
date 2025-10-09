import { supabase, supabaseAdmin } from "../src/supaclient.js";

export async function loginController(req, res) {
    const { email, password } = req.body;
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (error) {
            return res.status(error.status ?? 400).json({
                message: error.message,
                status: error.status ?? 400
            });
        }

        return res.status(200).json({
            user: data.user ?? null,
            session: data.session ?? null
        });
    } catch (err) {
        return res.status(500).json({ message: "Login failed" });
    }
}
export async function registerController(req, res) {
    const { email, password, username, phone, city } = req.body;
    try {
        if (supabaseAdmin) {
            // Use Admin API
            const { data: adminData, error: adminError } = await supabaseAdmin.auth.admin.createUser({
                email,
                password,
                email_confirmed: true,   // ✅ correct key
                user_metadata: {
                    username,
                    phone,
                    city
                }
            });

            if (adminError) {
                return res.status(adminError.status ?? 400).json({
                    message: adminError.message,
                    status: adminError.status ?? 400
                });
            }

            return res.status(200).json({
                user: adminData.user ?? null,
                session: null,
                message: "User created via admin"
            });
        }

        // Fallback to public signUp
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: { username, phone, city } // ✅ fix typo
            }
        });

        if (error) {
            return res.status(error.status ?? 400).json({
                message: error.message,
                status: error.status ?? 400
            });
        }

        const needsEmailConfirm = !!data.user && !data.session;
        return res.status(200).json({
            user: data.user ?? null,
            session: data.session ?? null,
            message: needsEmailConfirm
                ? "Check your email to confirm your account"
                : "User registered successfully"
        });
    } catch (err) {
        console.error("Registration error:", err);
        return res.status(500).json({ message: "Registration failed" });
    }
}
